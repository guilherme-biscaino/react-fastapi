import React, { useState } from 'react'
import { Input } from '../Input'
import { MdBadge, MdPassword, MdPayments } from 'react-icons/md'
import { Button } from '../Button'
import { useForm } from 'react-hook-form'
import {Container, Wrapper, Row, Textstyle, SelectStyled} from './styles'
import { handleAccountCreate, handleAccountDelete, handleAccountHistory, handleDeposit, handleTransfer, handleWithdraw } from '../../service/api'
import { useNavigate } from 'react-router-dom'

const transactionOptions = ["saque", "deposito", "transação"]
const accounts = JSON.parse(localStorage.getItem('userAccounts')) || []


const ActionBlock = ( { title, isTransaction=false } ) => {
  const [operationResult, setOperationResult] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const [inputs, setInputs] = useState({
    fromAccount: '',
    amount: '',
    toAccount: '',
    password: '',

  });
  const navigate = useNavigate();

  const handleAction = async () => {
    const {fromAccount, amount, toAccount, password} = inputs;

    try {
      let result;

      switch(title) {
        case 'saque':
          result = await handleWithdraw({fromAccount, amount, password});
          setOperationResult({
            account: result.account_start,
            amount: result.amount,
            type: "saque",
          });
          break
        case 'deposito':
         result = await handleDeposit({fromAccount, amount, password});
         setOperationResult({
          account: result.account_start,
          amount: result.amount,
          type: "deposito",
         });
         console.log(result)
          break
        case 'transação':
          result = await handleTransfer({fromAccount, amount, toAccount, password});
          setOperationResult({
            account: result.account_start,
            amount: result.amount,
            type: "transferência",
            account_end: result.account_end,
          });
          break
        case 'create':
          result = await handleAccountCreate({password});
          setOperationResult({
            account: result.id,
            type: "criação de conta",
          });
          break
        case 'delete':
          await handleAccountDelete({fromAccount, password});
          setOperationResult({ 
            account: fromAccount,
            type: "Deleção de conta",
          })
          break
        case 'historic':
          result = await handleAccountHistory();
          navigate('/get/history', {state: { transactions: result}})
          break
        default:
          alert('error');
          break
      }
      setIsSuccess(true);
  } catch (error) {

  }
  }

  return (
    <Container>
    <Wrapper>

            { !isSuccess && (
            <Row>
              <Textstyle>
              {
              (() => {
                switch (title) {
                  case 'saque':
                  case 'deposito':
                    return "Realize a seu " + title;
                  case 'transação':
                    return "Realize a sua " + title;
                  case 'create':
                    return "Crie uma nova conta";
                  case 'delete':
                    return "Exclua uma conta";
                  case 'historic':
                    return "cheque seu extrato";
                  default:
                      console.log('error');
                }
              }

              )()
            }
            </Textstyle>
            </Row>
            )}

          {!operationResult && !isSuccess && (
          <>
            {title !== "create" && <Row>
              <SelectStyled value={inputs.fromAccount} onChange={(e) => setInputs({ ...inputs, fromAccount: e.target.value })}>
                <option value="">Selecione a conta</option>
                  {accounts.map((account, index) => (
                    <option key={index} value={account.id}>{account.id}</option>
                  ))}
              </SelectStyled>
              </Row>}

            {transactionOptions.includes(title) && <Row><Input placeholder="Amount" type="number" onChange={(e) => setInputs({ ...inputs, amount: e.target.value })} lefticon={<MdPayments color='black' />} /></Row>}

            {isTransaction && <Row><Input placeholder="Id da conta de destino" onChange={(e) => setInputs({ ...inputs, toAccount: e.target.value })} lefticon={<MdBadge color='black' />} /></Row>}

            <Row>
              <Input placeholder="Senha" type="password" onChange={(e) => setInputs({ ...inputs, password: e.target.value })} lefticon={<MdPassword color='black' />} />
            </Row>

            <Row>
              <Button title="Efetuar" onClick={handleAction} />
            </Row>
          </>
        )}

        {/* Exibindo o resultado da operação */}
        {operationResult && (
          <Row> 
            <Textstyle>
              {isSuccess ? (
                <>
                  <p>Operação realizada com sucesso!</p>
                  <p><strong>Conta:</strong> {operationResult.account}</p>
                  {title !== "delete" ? (
                    title === "create" ? (
                      <p><strong>Saldo da conta:</strong> R$ {operationResult.amount}</p>
                    ) : (
                      <p><strong>Valor da Operação:</strong> R$ {operationResult.amount}</p>
                    )
                  ) : null}
                  <p><strong>Tipo de Operação:</strong> {operationResult.type}</p>
                  {operationResult.account_end && <p><strong>Conta de Destino:</strong> {operationResult.account_end}</p>}
                  {title === "create" && <p><strong>Senha:</strong> {inputs.password}</p>}
                </>
              ) : (
                <p>{operationResult.error}</p>
              )}
            </Textstyle>
          </Row>
        )}
      </Wrapper>

    </Container>
  )
}

export { ActionBlock }