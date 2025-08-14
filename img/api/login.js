export default function handler(req, res) {
  if (req.method === 'POST') {
    const { usuario, senha } = req.body;
    const users = {
      mercatto: '1234',
      villa: '5678',
      padaria: 'abcd'
    };
    if (users[usuario?.toLowerCase()] === senha) {
      res.status(200).json({ sucesso: true });
    } else {
      res.status(200).json({ sucesso: false });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
