import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className={`sidebar`}>
        <div className="user-info">
            <div className="info-img img-fit-cover">
                <img src={personImgs.person_two} alt="profile image"/>
            </div>
            <span className="info-name">alice-doe</span>
        </div>
        <nav className="navigation">
            <ul className="nav-list">
                {
                    nav
                }
                
            </ul>
        </nav>

    </div>
  )
}

export default Sidebar

const styles = StyleSheet.create({})