import style from "../Css/MyFavorites.module.css";

function MyFavoritesPage() {
  return (
    <>
      <div className={style.ContainerFavorites}>
        My Favorites
      </div>
      <div className={style.divfavorites}>
        <div className={style.emptyMessage}>
          Favorites are empty
        </div>
      </div>
    </>
  );
}

export default MyFavoritesPage;
