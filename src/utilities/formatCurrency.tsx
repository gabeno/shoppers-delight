const CURRRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: "USD", style: "currency"})

export function formatCurrency(number: number) {
    return CURRRENCY_FORMATTER.format(number)
}