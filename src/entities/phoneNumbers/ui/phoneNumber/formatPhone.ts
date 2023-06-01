export function formatPhone(number: string) {
    let template = "+xxx (xx) x-xxx-xxx";

    for (let i = 0; template.includes('x'); i++) {
        template = template.replace('x', number[i]);
    }
    
    return template;
}