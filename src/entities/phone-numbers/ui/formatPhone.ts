export function formatPhone(phone: string) {
    let template = "+xxx (xx) x-xxx-xxx";

    for (let i = 0; template.includes('x'); i++) {
        template = template.replace('x', phone[i]);
    }
    
    return template;
}