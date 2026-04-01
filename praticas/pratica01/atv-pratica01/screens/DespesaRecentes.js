import { Text } from "react-native"
import DespesaSaida from "../components/despesa/DespesaSaida";

function DespesaRecente() {

    function filtrarUltimos7Dias(despesas) {
        const hoje = new Date();
        const seteDiasAtras = new Date();
        seteDiasAtras.setDate(hoje.getDate() - 7);

        return despesas.filter(despesa => {
            return despesa.data >= seteDiasAtras && despesa.data <= hoje;
        });
    }

    const DUMMY_DESPESAS = [
        {
            id: '1',
            descricao: 'conta de luz',
            valor: 150.00,
            data: new Date(2026, 2, 30)
        },
        {
            id: '2',
            descricao: 'conta de água',
            valor: 80.00,
            data: new Date(2026, 2, 30)
        }
    ]

    return (
        <DespesaSaida despesas={filtrarUltimos7Dias(DUMMY_DESPESAS)} periodo={'Últimos 7 dias'}/>
    )

}

export default DespesaRecente