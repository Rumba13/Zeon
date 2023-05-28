

export default function useScrollUp() {
   function onClick() {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    return {onClick}
}