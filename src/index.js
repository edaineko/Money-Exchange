
module.exports = function makeExchange(currency) {

    const H = 50,
        Q = 25,
        D = 10,
        N = 5,
        P = 1;

    var result = {};

    if (currency > 10000){

        return  { error: "You are rich, my friend! We don't have so much coins for exchange" };

    } else if (currency < 0) {

        return result;
    } else {
        if (currency >= H) {

            result.H = Math.floor(currency / H); // 102/50=2.2

            currency = currency - result.H * H; // 2=102-2*50
        }

        if (currency >= Q) {

            result.Q = Math.floor(currency / Q);

            currency = currency - result.Q * Q;
        }

        if (currency >= D) {

            result.D = Math.floor(currency / D);

            currency = currency - result.D * D;
        }

        if (currency >= N) {

            result.N = Math.floor(currency / N);

            currency = currency - result.N * N;
        }

        if (currency >= P) {
            
            result.P = currency;
        }
    }

    return result;

}
