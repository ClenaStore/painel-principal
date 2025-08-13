export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { usuario, senha } = req.body;

  // Pegando variáveis de ambiente da Vercel
  const usuarios = {
    MERCATTO: process.env.USER_MERCATTO,
    VILLA: process.env.USER_VILLA,
    PADARIA: process.env.USER_PADARIA
  };

  const senhas = {
    MERCATTO: process.env.PASS_MERCATTO,
    VILLA: process.env.PASS_VILLA,
    PADARIA: process.env.PASS_PADARIA
  };

  if (!usuarios[usuario]) {
    return res.status(401).json({ sucesso: false, mensagem: 'Usuário inválido' });
  }

  if (usuarios[usuario] === usuario && senhas[usuario] === senha) {
    return res.status(200).json({ sucesso: true, mensagem: 'Login válido' });
  } else {
    return res.status(401).json({ sucesso: false, mensagem: 'Senha incorreta' });
  }
}
