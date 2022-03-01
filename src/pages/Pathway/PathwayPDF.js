import { Link, Document, Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";
import { Canvg } from 'canvg';

const PathwayPDF = ({ resources }) => {
    Font.register({
        family: "Poppins",
        src: "https://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf",
        fontStyle: "normal",
        fontWeight: "normal",
    });
    const pdfStyles = StyleSheet.create({
        page: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            fontFamily: "Poppins",
        },
        thumbnail: {
            width: "120px",
            marginRight: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            borderRadius: "30px",
            padding: "10px"
        },
        resourceTitle: {
            fontSize: "10px",
            textAlign: "center",
        },
        resourceSource: {
            fontSize: "8px",
            textAlign: "center",
        },
        resource: {
            display: "flex",
            flexDirection: "row",
            minHeight: "100px",
            margin: "20px",
        },
        bulletRow: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flexStart",
        },
        bullet: {
            textDecoration: "none",
        },
        subDescription: {
            display: "flex",
            flexDirection: "row",
        },
        dayTitle: {
            fontSize: "18px",
        },
        resourceInfo: {
            display: "flex",
            flexDirection: "column",
            fontSize: "8px",
            flexWrap: "wrap",
            width: "380px",
            justifyContent: "space-evenly",
        },
        description: {
            width: "100%",
        },
    });

    return (
        <Document>
            <Page orientation="portrait" style={pdfStyles.page}>
                {resources.map((resource, index) => {
                    const splitIndex = resource.name.indexOf("|");
                    const source = resource.name.slice(0, splitIndex);
                    const title = resource.name.slice(splitIndex + 1);
                    console.log(resource.icon);
                    return (
                        <View wrap={false} style={pdfStyles.resource}>
                            <View style={pdfStyles.thumbnail}>

                                <Image
                                src={(async () => {
                                    const canvas = new OffscreenCanvas(1000, 1000); // width, height
                                    const ctx = canvas.getContext('2d');

                                    const v = await Canvg.from(ctx, resource.icon);
                                    await v.render();

                                    // the canvas calls to output a png
                                    var blob = await canvas.convertToBlob();
                                    const img = URL.createObjectURL(blob);

                                    // do what you want with the base64, write to screen, post to server, etc...
                                    console.log(img)
                                    return img;
                                })()}
                                />

                                <Text style={pdfStyles.resourceTitle}>{title}</Text>
                                <Text style={pdfStyles.resourceSource}>{source}</Text>
                            </View>
                            <View style={pdfStyles.resourceInfo}>
                                <Text style={pdfStyles.dayTitle}>{`Day ${index + 1}`}</Text>
                                <Text style={pdfStyles.description}>{resource.description}</Text>
                                <View style={pdfStyles.subDescription}>
                                    <Text style={pdfStyles.bullet}>{resource.difficulty}</Text>
                                    {resource.video != null && (
                                        <View style={pdfStyles.bulletRow}>
                                            <Text style={pdfStyles.bullet}>
                                                {"\u00A0"}•{"\u00A0"}
                                            </Text>
                                            <Link src={resource.video} style={pdfStyles.bullet}>
                                                video
                                            </Link>
                                        </View>
                                    )}
                                    {resource.article != null && (
                                        <View style={pdfStyles.bulletRow}>
                                            <Text style={pdfStyles.bullet}>
                                                {"\u00A0"}•{"\u00A0"}
                                            </Text>
                                            <Link src={resource.article} style={pdfStyles.bullet}>
                                                article
                                            </Link>
                                        </View>
                                    )}
                                </View>
                            </View>
                        </View>
                    );
                })}
            </Page>
        </Document>
    );
};

export default PathwayPDF;
