export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ sucesso: false, mensagem: 'Método não permitido' });
  }

  const { usuario, senha } = req.body;

  const credenciais = {
    mercatto: process.env.USER_MERCATTO,
    villa: process.env.USER_VILLA,
    padaria: process.env.USER_PADARIA
  };
  const senhas = {
    mercatto: process.env.PASS_MERCATTO,
    villa: process.env.PASS_VILLA,
    padaria: process.env.PASS_PADARIA
  };

  if (credenciais[usuario.toLowerCase()] && senhas[usuario.toLowerCase()]) {
    if (
      usuario.toLowerCase() === credenciais[usuario.toLowerCase()] &&
      senha === senhas[usuario.toLowerCase()]
    ) {
      return res.status(200).json({ sucesso: true });
    }
  }

  return res.status(401).json({ sucesso: false, mensagem: 'Usuário ou senha inválidos' });
}
