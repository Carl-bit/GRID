//para evaluar los str necesitas el ${}

export function TwitterFollowCard({formatUserName,user,name,isFolowing}){
    console.log(isFolowing)
    return(
        <article className='tw-followCard'>
            <header className='w-followCard-header'>
                <img className='tw-followCard-avatar' alt="Avatar" src="https://i.imgur.com/3sgbCsc.jpeg"/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(user)}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside> 
        </article>
    )
}