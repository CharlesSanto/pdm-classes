import { Text, View } from 'react-native';

function DespesaSumario({despesa, periodo}) {

    const somaDespesas = despesa.reduce((total, despesa) => {
        return total + despesa.valor;
    }, 0);

    return (
        <View>
            <Text> {periodo} </Text>
            <Text> R$ {somaDespesas.toFixed(2)} </Text> 
        </View>
    )       
}

export default DespesaSumario;