function ir(esconder, mostrar) {
      document.getElementById(esconder).style.display = 'none';
      document.getElementById(mostrar).style.display = 'block';
    }

    function fazerLogin(usuario, senha) {
      const RM = '26575';
      if (usuario === RM && senha === RM) {
        alert('Login realizado com sucesso!');
      } else {
        alert('Usuário ou senha incorretos.');
      }
    }