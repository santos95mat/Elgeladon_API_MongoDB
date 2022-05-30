import mongoose from 'mongoose';

const { connect } = mongoose;

export const conectDB = () => {
  connect(
    'mongodb+srv://admin:admin@cluster0.awubtsm.mongodb.net/?retryWrites=true&w=majority',
  )
    .then(() => {
      console.log('MongoDB conectado');
    })
    .catch((err) => {
      console.log(`Erro na conexão com o MongoDB: ${err}`);
    });
};
