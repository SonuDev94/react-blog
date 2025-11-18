import style from './userProfile.module.css'

function UserProfile() {
    return (
        <div>
            
            <div className={style.card}>

                <img className={style.img} src="https://picsum.photos/seed/picsum/200/300" alt="UserProfile" />
                <div className={style.info_view}>
                    <h4 className={style.heading}>Sonu Kumar</h4>
                    <p>Software Engineer</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;