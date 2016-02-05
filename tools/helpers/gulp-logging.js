export function log(plugins, msg) {
    if(typeof(msg) === 'object') {
        for(var item in msg) {
            if(msg.hasOwnProperty(item)) {
                plugins.util.log(plugins.util.colors.green(msg[item]));
            }
        }
    } else {
        plugins.util.log(plugins.util.colors.green(msg));
    }
}
