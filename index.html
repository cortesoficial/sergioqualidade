<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Controle - Master</title>
    <style>
        /* --- ESTILO (CSS) --- */
        body {
            background-color: #0f0f0f;
            font-family: 'Segoe UI', sans-serif;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background: #1a1a1a;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            width: 350px;
            text-align: center;
        }

        h2 { color: #3498db; margin-bottom: 20px; }
        h3 { font-size: 1.1rem; color: #bbb; }

        input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            box-sizing: border-box;
            border-radius: 6px;
            border: 1px solid #333;
            background: #252525;
            color: white;
            outline: none;
        }

        input:focus { border-color: #3498db; }

        button {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 6px;
            background: #3498db;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
            margin-top: 10px;
        }

        button:hover { background: #2980b9; }

        .btn-cadastrar { background: #27ae60; }
        .btn-cadastrar:hover { background: #219150; }

        .btn-sair { background: #e74c3c; margin-top: 20px; }
        .btn-sair:hover { background: #c0392b; }

        hr { border: 0; border-top: 1px solid #333; margin: 20px 0; }

        #msg-erro { color: #ff4d4d; font-size: 0.9rem; }
        #msg-sucesso { color: #2ecc71; font-size: 0.9rem; }
    </style>
</head>
<body>

    <div id="login-section" class="container">
        <h2>Acesso</h2>
        <input type="text" id="user" placeholder="Usuário">
        <input type="password" id="pass" placeholder="Senha">
        <button onclick="logar()">Entrar</button>
        <p id="msg-erro"></p>
    </div>

    <div id="master-panel" class="container" style="display: none;">
        <h2>Painel Master</h2>
        <p>Logado como: <strong>Administrador</strong></p>
        <hr>
        <h3>Cadastrar Novo Acesso</h3>
        <input type="text" id="new-user" placeholder="Novo Usuário">
        <input type="password" id="new-pass" placeholder="Senha do Novo Usuário">
        <button onclick="cadastrarUsuario()" class="btn-cadastrar">Salvar Novo Login</button>
        <button onclick="logout()" class="btn-sair">Sair do Sistema</button>
        <p id="msg-sucesso"></p>
    </div>

    <div id="user-panel" class="container" style="display: none;">
        <h2>Área Restrita</h2>
        <p>Bem-vindo ao sistema.</p>
        <p style="font-size: 0.8rem; color: #888;">Você não tem permissão para gerenciar contas.</p>
        <button onclick="logout()" class="btn-sair">Sair</button>
    </div>

    <script>
        /* --- LÓGICA (JAVASCRIPT) --- */

        // LOGIN MASTER FIXO
        const MASTER_USER = "admin";
        const MASTER_PASS = "admin123";

        function logar() {
            const user = document.getElementById('user').value;
            const pass = document.getElementById('pass').value;
            const erro = document.getElementById('msg-erro');

            // 1. Verifica se é a conta Master
            if (user === MASTER_USER && pass === MASTER_PASS) {
                abrirPainel('master-panel');
                return;
            }

            // 2. Verifica se é um usuário comum (salvo no navegador)
            let listaUsuarios = JSON.parse(localStorage.getItem('banco_usuarios')) || [];
            let encontrado = listaUsuarios.find(u => u.nome === user && u.senha === pass);

            if (encontrado) {
                abrirPainel('user-panel');
            } else {
                erro.innerText = "Usuário ou senha incorretos!";
            }
        }

        function cadastrarUsuario() {
            const novoNome = document.getElementById('new-user').value;
            const novaSenha = document.getElementById('new-pass').value;
            const sucesso = document.getElementById('msg-sucesso');

            if (novoNome === "" || novaSenha === "") {
                alert("Preencha o nome e a senha do novo usuário!");
                return;
            }

            // Puxa a lista atual ou cria uma nova
            let listaUsuarios = JSON.parse(localStorage.getItem('banco_usuarios')) || [];
            
            // Adiciona o novo e salva de volta no navegador
            listaUsuarios.push({ nome: novoNome, senha: novaSenha });
            localStorage.setItem('banco_usuarios', JSON.stringify(listaUsuarios));

            sucesso.innerText = "Usuário " + novoNome + " cadastrado com sucesso!";
            
            // Limpa os campos
            document.getElementById('new-user').value = "";
            document.getElementById('new-pass').value = "";
        }

        function abrirPainel(painelId) {
            document.getElementById('login-section').style.display = 'none';
            document.getElementById(painelId).style.display = 'block';
        }

        function logout() {
            window.location.reload(); // Recarrega para voltar à tela de login
        }
    </script>
</body>
</html>
