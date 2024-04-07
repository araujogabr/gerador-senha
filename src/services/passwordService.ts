export default function generatePass(){
    let password:string = '';
    let characters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    let passWordLenght = 8;

    for(let index=0; index<passWordLenght;index++){
        password += characters.charAt( /*charAt() permite retornar um caractere baseado em um índice, como se fosse um vetor*/
            Math.floor(Math.random() * characters.length)
        ) /*Math.floor() arredonda valores decimais para inteiros*/
            /*Como o Math.random() retorna um valor decimal entre 0 e a quantidade de caracteres na variável characters = 'ABC...' (ex: 3.2, 4.7), é nessário que o índice seja convertido em número inteiro (2.4 para 2 ou 2.7 para 3) para que seja escolhido um caractere, por isso o Math.floor()*/
    }

    return password;
}