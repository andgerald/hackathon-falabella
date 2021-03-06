import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Claim from "./Claim";
import Antecedent from "./Antecedent";
import { Divider } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiTypography-h5":{
        marginLeft:-11,
    },
   
    
  },
  formControl: {
    margin: theme.spacing(3),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

const Case = () => {
  const classes = useStyles();

  const [displayAccident, setDisplayAccident] = useState(false);
  const [displayPublicity, setDisplayPublicity] = useState(false);

  const storageUsuario = localStorage.getItem("usuarioActual");
  const usuario = JSON.parse(storageUsuario);

  const storageReclamos = localStorage.getItem("reclamos");
  console.log("Reclamos", storageReclamos);
  const reclamos = storageReclamos ? JSON.parse(storageReclamos) : [];

  console.log("Usuariooo", usuario);
  const [datos, setDatos] = useState({
    usuario: usuario.nombre,
    fecha: new Date(),
  });

  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    if (event.target.value === "Accidente") {
      setDisplayAccident(!displayAccident);
    } else if (event.target.value === "Publicidad") {
      setDisplayPublicity(!displayPublicity);
    }

    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const guardarDatos = (event) => {
    event.preventDefault();

    console.log("reclamos", reclamos);
    reclamos.push(datos);

    console.log("enviando datos..." + JSON.stringify(datos), reclamos);

    localStorage.setItem("reclamos", JSON.stringify(reclamos));
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <form
          className={classes.container}
          noValidate
          onSubmit={(e) => guardarDatos(e)}
        >
          <FormControl component="fieldset" className={classes.formControl}>
             <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
                Medio de reclamo
            </Box>
          </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="medio"
                    onChange={(e) => handleInputChange(e)}
                    color="primary"
                    value="online"
                  />
                }
                label="Online"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="medio"
                    onChange={(e) => handleInputChange(e)}
                    color="primary"
                    value="local"
                  />
                }
                label="Local"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="medio"
                    onChange={(e) => handleInputChange(e)}
                    color="primary"
                    value="casa matriz"
                  />
                }
                label="Casa Matriz/Oficina Central"
              />
            </FormGroup>
            <Typography component="h1" variant="h5" color="primary">
            <Box fontWeight="fontWeightBold" m={1} fontSize={20} m={1}>
            Materias por reclamo
            </Box>
          </Typography>

            <FormGroup>
              <FormControlLabel
                value="2"
                name="materia"
                control={<Checkbox color="primary" />}
                label="Reclamo por despacho del producto"
                labelPlacement="end"
              />
              <FormControlLabel
                name="materia"
                value="Publicidad"
                control={
                  <Checkbox
                    color="primary"
                    onClick={(event) => handleInputChange(event)}
                  />
                }
                label="Reclamo por publicidad engañosa"
                labelPlacement="end"
              />
              <FormControlLabel
                name="materia"
                value="Accidente"
                control={
                  <Checkbox
                    color="primary"
                    onClick={(event) => handleInputChange(event)}
                  />
                }
                label="Reclamo por accidente de cliente"
                labelPlacement="end"
              />
              <FormControlLabel
                value="top"
                name="materia"
                control={<Checkbox color="primary" />}
                label="Reclamo por uso de estacionamiento"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>

          <TextField
            id="date"
            label="Fecha de reclamo"
            type="date"
            defaultValue="2020-11-26"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="Fecha indicente de reclamo"
            type="date"
            defaultValue="2020-11-26"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />

          {displayAccident && (
            <>
              <br></br>
              <Divider />
              <br></br>
              <br></br>
              <Claim handleInputChange={handleInputChange} />
            </>
          )}
          {displayPublicity && <Antecedent />}
        </form>
      </Container>
    </div>
  );
};
export default Case;
