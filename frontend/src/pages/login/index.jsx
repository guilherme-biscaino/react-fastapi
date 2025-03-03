import { Container, Title, TitleHighlight, TextContent, Wrapper, Column, Row, LoginText } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/HeaderUnlogged';
import { Input } from '../../components/Input';
import { MdLock, MdBadge } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
  
    // Function to handle login form submission
    const handleLogin = async (e) => {
      e.preventDefault();
  
      setLoading(true);
      setError(null);
      setMessage('');
      
      try {
        // Convert the form data to x-www-form-urlencoded format
        const formData = new URLSearchParams();
        formData.append('grant_type', 'password');  // Include the grant_type as in Swagger UI
        formData.append('username', cpf);          // Use CPF as username
        formData.append('password', senha);        // Use password
        formData.append('scope', '');              // If scope is needed, add it (empty for now)
        formData.append('client_id', '');          // If client_id is needed, add it (empty for now)
        formData.append('client_secret', '');      // If client_secret is needed, add it (empty for now)

        
        // Send the POST request with the correct Content-Type
        const response = await axios.post("http://localhost:8000/login", formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',  // Important!
          },
        });
  
        if (response.data.access_token) {
          localStorage.setItem('authToken', response.data.access_token);  // Save token
          localStorage.setItem('tokenType', response.data.token_type);
          setMessage('Login successful!');
          navigate('/home');
        }
  
      } catch (err) {
        setError('Login failed. Please check your credentials.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  return (
    <>    
      <Header />
      <Container>
        <Column>
          <Title>
            <TitleHighlight>
              título
              <br />
            </TitleHighlight>
            chamativo
          </Title>
        </Column>
        <Column />
        <Column />
        <Column>
          <Wrapper>
            <Row>
              <TitleHighlight>
                <LoginText>
                  Acesse sua conta
                </LoginText>
              </TitleHighlight>
              </Row>
            {/* CPF Input */}
            <Row>
              <Input 
                placeholder="Cpf" 
                lefticon={<MdBadge color='black' />}
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </Row>

            {/* Password Input */}
            <Row>
              <Input 
                placeholder="Senha" 
                lefticon={<MdLock color='black' />}
                type="password" // Ensure password input is hidden
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Row>

            {/* Login Button */}
            <Row>
              <Button 
                title={loading ? "Entrando..." : "Entrar"} 
                variant="secondary" 
                onClick={handleLogin} 
                disabled={loading}
              />
            </Row>

            {/* Error or Success Message */}
            {error && <TextContent style={{ color: 'red' }}>{error}</TextContent>}
            {message && <TextContent style={{ color: 'green' }}>{message}</TextContent>}

            {/* Forgot password and Register links */}
            <Row>
              <TextContent>esqueci minha senha</TextContent>
              <TextContent>Ainda não sou cliente</TextContent>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}

export { LoginPage };