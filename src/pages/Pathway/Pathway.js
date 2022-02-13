import React, { useContext } from "react";
import { BlobProvider } from "@react-pdf/renderer";
import PageHeader from "../../components/PageHeader/PageHeader";
import PathwayHeader from "../../img/pathway-header.svg";
import PathDay from "../../components/PathDay/PathDay";
import PathwayPDF from "./PathwayPDF";
import QuizContext from "../Quiz/QuizContext";
import resources from "../../data/resources";
import "./Pathway.css";

const Pathway = () => {
    const { quizResults } = useContext(QuizContext);
    // start from here...
    console.log(quizResults);

    const example_resources = resources[3].links;

    const PDFExportLink = ({children}) => (
        <BlobProvider document={<PathwayPDF resources={example_resources} />}>
            {({ url }) => (
                <a href={url} target="_blank" rel="noreferrer noopener">
                    {children}
                </a>
            )}
        </BlobProvider>
    );

    return (
        <div className="pathway-page">
            <PageHeader
                header="Your Pathway"
                subheader="react  •  beginner  •  videos  •  1 week"
                img={PathwayHeader}
                imgStyle={{
                    backgroundSize: "423px 297px",
                    backgroundPosition: "100%",
                }}
            />
            {example_resources.map((resource, index) => (
                <PathDay index={index + 1} resource={resource} />
            ))}
            <h2>Come back later?</h2>
            <p3>
                You can come back later and your pathway will be saved! Alternatively, you can <a href="/quiz" rel="noreferrer noopener">
                start over</a> or <PDFExportLink>export</PDFExportLink> it.
            </p3>
        </div>
    );
};

export default Pathway;
