export function RandomTopbarID(length, container) {
    const prefix = '';
    let string = prefix;

    while (true) {
        for (let i = 0; i < (length - 1); i++) {
            string += Math.floor(((Math.random() + 1) * 999) + i);
        }


        if (!container[string]) {
            container.push(string);

            return string;
        } else {
            string = prefix;
            continue;
        }
    }
}