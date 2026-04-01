import DespesaSaida from "../components/despesa/DespesaSaida"

function TodasDespesas() {

    const DUMMY_DESPESAS = [
        {
            id: '1',
            descricao: 'conta de luz',
            valor: 150.00,
            data: new Date(2024, 5, 1)
        },
        {
            id: '2',
            descricao: 'conta de água',
            valor: 80.00,
            data: new Date(2024, 5, 3)
        }
    ]

    return (
        <DespesaSaida despesas={DUMMY_DESPESAS} periodo={'Total'} />
    )

}

export default TodasDespesas