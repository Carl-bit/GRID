export const saveGame2Storage = ({board,turn}) =>{
    window.localStorage.setItem('board',JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () =>{
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}