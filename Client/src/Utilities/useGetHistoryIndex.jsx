export const useGetHistoryIndex = (history, date) => {
    console.log(history, date);
    for (let i = history.length - 1 ; i > -1 ; i--) {
        if (history[i].date === date) {
            return {historyIndex: i};
        }
    }
}