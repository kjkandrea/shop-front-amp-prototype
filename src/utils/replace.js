export const addCommas = (string) => string.replace(/^0+/, '').replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");