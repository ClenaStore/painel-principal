export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ sucesso: false, mensagem: 'Método não permitido' });
  }

  const { usuario, senha } = req.body;

  // Pegando credenciais do painel da Vercel (Configurar em Settings → Environment Variables)
  const userEnv = process.env[`USER_${usuario.toUpperCase()}`];
  const passEnv = process.env[`PASS_${usuario.toUpperCase()}`];

  if (userEnv && passEnv && senha === passEnv) {
    return res.status(200).json({ sucesso: true });
  } else {
    return res.status(401).json({ sucesso: false, mensagem: 'Usuário ou senha inválidos' });
  }
}
