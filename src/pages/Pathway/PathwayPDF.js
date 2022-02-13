import { Link, Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

const PathwayPDF = ({ resources }) => {
    Font.register({
        family: "Poppins",
        src: "http://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf",
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
        },
        resourceTitle: {
            fontSize: "10px",
            textAlign: "center",
        },
        resourceSource: {
            fontSize: "6px",
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
