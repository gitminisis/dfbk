import { Grid } from "@mui/material";
import {
    SummaryContainer,
    Main,
  } from "../SummaryLayout/SummaryLayout.style";
  import GeneralSearchBox from "../GeneralSearchBox";

const SummaryNoRecord = (props) => {

    const {

        generalSearchBox,

    } = props;

    const xml = {
        database_name: "UNION_VIEW",
        session: document.querySelector('session-id').innerText
    }
    return (
        <div>
            <SummaryContainer
                elevation={2}
                sx={{ backgroundColor: "rgb(233, 232, 232,0.4)" }}
            >
                <Grid
                    container
                    spacing={2}
                    rowSpacing={2}
                    style={{ position: "relative", width: "100vw" }}
                >
                    <Main
                        open={showFilter}
                        sx={{
                            marginLeft: { md: 0, lg: 0 },
                        }}
                    >
                        <Grid item xs={12}>
                            <GeneralSearchBox {...generalSearchBox} xml={xml} />
                        </Grid>


                    </Main>
                </Grid>
            </SummaryContainer>
        </div>
    )

}

export default SummaryNoRecord;