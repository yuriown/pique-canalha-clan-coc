// Sua chave de API do Clash of Clans
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImMwMmQwYWJjLTFkNjctNGI5Ni1iNWM5LTViMmU4NDk0ZjU1YSIsImlhdCI6MTcxNTA5OTA4Nywic3ViIjoiZGV2ZWxvcGVyLzVkMjE1ZWI0LWZhZjMtMDdhMi01OTQwLTA0ZGE4YmIxNWU4NyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OS4xNzIuMjM0LjI1MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.i4YKR9jTeccu-Ta-l0tA6smm6dZ-4wH_-NbQOd7eOpCOA_QZdDeCoHwnsINTJXIkT_rRQs7fj7ZMQmuWwMnGfA';

// ID do clã que você deseja obter informações
const clanId = '#2Y2CY2R09';

// URL da API para obter os membros do clã
const apiUrl = `https://api.clashofclans.com/v1/clans/${clanId}/members`;

// Realiza uma requisição GET para a API do Clash of Clans
fetch(apiUrl, {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type':  'application/json',
  }
})
  .then(response => {
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    if (!response.ok) {
      throw new Error('Erro ao obter os dados da API: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Aqui você pode fazer o que quiser com os membros do clã recebidos da API
    console.log(data);
  })
  .catch(error => {
    console.error('Erro na requisição da API:', error);
  });