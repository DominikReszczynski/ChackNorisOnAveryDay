import { filmography as chuckNorrisFilmography } from "./ChuckNorrisFilmography";
import "./Filmography.css";
export const Filmography = () => {
  return (
    <div className="site_conteiner">
      <thead>
        <h2>FILMOGRAPHY</h2>
      </thead>
      <table id="filmography_table">
        {chuckNorrisFilmography.map((data) => {
          return (
            <div className="row_of_the_table">
              <td width="40">{data.year}</td>
              <td width="400">{data.title}</td>
              <td width="200">{data.role}</td>
            </div>
          );
        })}
      </table>
    </div>
  );
};
