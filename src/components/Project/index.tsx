import { ProjectContainer } from "./styles";
import { IProject } from "./types";


export const Project = ({image, title}:IProject) =>{



    return(
        <>
            <ProjectContainer>

                <div className="circleContainer">
                    <img src={image} alt="" />
                </div>

                
                
                <div className="imageProject">
                    <p>{title}</p>
                </div>
            </ProjectContainer>

        </>

    )
}