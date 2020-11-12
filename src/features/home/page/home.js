import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '../../../components/fab/index';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '../../../components/card/index';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    gridListTile: {
      height: '100% !important',
      margin: 4
    }
}));

export default function Home(props){
    const classes = useStyles();

    const data = [
        {
            url: "https://www.rsdiscus.com.br/peixes-de-agua-doce/peixes-de-ph-muito-alcalino/tanganika-ciclideos-africanos/lamprologus-calvus-black-4-a-5-cm",
            nome: "Calvus Black",
            familia: "Cichlidae",
            origin: "África / Lago Tanganica",
            sociabilidade: "Sozinho / Casal / Harém",
            min_ph: 8,
            max_ph: 8.8,
            med_ph: 8.4,
            imageUrl: "https://aquaterrario.com.br/blog/wp-content/uploads/2019/03/18-03.png",
            durezaAgua: "Dura",
            medTamanho: "Aproximadamente 13 cm",
            alimentacao: "Carnívoros, na natureza se alimentam de crustáceos, larvas de insetos, moluscos e filhotes de outros peixes. Ofereça rações mais protéicas. Evite manter peixes herbívoros com outros de hábitos alimentares distintos em um mesmo aquário, o excesso de proteína animal (oferecida nas rações para os onívoros e carnívoros) prejudica a saúde do peixe herbívoro, podendo resultar em Bloat ou outras doenças!"
        },
        {
            url: "https://www.rsdiscus.com.br/peixes-de-agua-doce/peixes-de-ph-muito-alcalino/tanganika-ciclideos-africanos/lamprologus-calvus-black-4-a-5-cm",
            nome: "Calvus Black 1",
            familia: "Cichlidae",
            origin: "África / Lago Tanganica",
            sociabilidade: "Sozinho / Casal / Harém",
            min_ph: 8,
            max_ph: 8.8,
            med_ph: 8.4,
            imageUrl: "https://aquaterrario.com.br/blog/wp-content/uploads/2019/03/18-03.png",
            durezaAgua: "Dura",
            medTamanho: "Aproximadamente 13 cm",
            alimentacao: "Carnívoros, na natureza se alimentam de crustáceos, larvas de insetos, moluscos e filhotes de outros peixes. Ofereça rações mais protéicas. Evite manter peixes herbívoros com outros de hábitos alimentares distintos em um mesmo aquário, o excesso de proteína animal (oferecida nas rações para os onívoros e carnívoros) prejudica a saúde do peixe herbívoro, podendo resultar em Bloat ou outras doenças!"
        },
        {
            url: "https://www.rsdiscus.com.br/peixes-de-agua-doce/peixes-de-ph-muito-alcalino/tanganika-ciclideos-africanos/lamprologus-calvus-black-4-a-5-cm",
            nome: "Calvus Black 2",
            familia: "Cichlidae",
            origin: "África / Lago Tanganica",
            sociabilidade: "Sozinho / Casal / Harém",
            min_ph: 8,
            max_ph: 8.8,
            med_ph: 8.4,
            imageUrl: "https://aquaterrario.com.br/blog/wp-content/uploads/2019/03/18-03.png",
            durezaAgua: "Dura",
            medTamanho: "Aproximadamente 13 cm",
            alimentacao: "Carnívoros, na natureza se alimentam de crustáceos, larvas de insetos, moluscos e filhotes de outros peixes. Ofereça rações mais protéicas. Evite manter peixes herbívoros com outros de hábitos alimentares distintos em um mesmo aquário, o excesso de proteína animal (oferecida nas rações para os onívoros e carnívoros) prejudica a saúde do peixe herbívoro, podendo resultar em Bloat ou outras doenças!"
        },
        {
            url: "https://www.rsdiscus.com.br/peixes-de-agua-doce/peixes-de-ph-muito-alcalino/tanganika-ciclideos-africanos/lamprologus-calvus-black-4-a-5-cm",
            nome: "Calvus Black 3",
            familia: "Cichlidae",
            origin: "África / Lago Tanganica",
            sociabilidade: "Sozinho / Casal / Harém",
            min_ph: 8,
            max_ph: 8.8,
            med_ph: 8.4,
            imageUrl: "https://aquaterrario.com.br/blog/wp-content/uploads/2019/03/18-03.png",
            durezaAgua: "Dura",
            medTamanho: "Aproximadamente 13 cm",
            alimentacao: "Carnívoros, na natureza se alimentam de crustáceos, larvas de insetos, moluscos e filhotes de outros peixes. Ofereça rações mais protéicas. Evite manter peixes herbívoros com outros de hábitos alimentares distintos em um mesmo aquário, o excesso de proteína animal (oferecida nas rações para os onívoros e carnívoros) prejudica a saúde do peixe herbívoro, podendo resultar em Bloat ou outras doenças!"
        },
    ];
    const icon = <AddIcon />;

    return (
        <div className={classes.root}>
            <div>
                <GridList className={classes.gridList} spacing={0} cols={2.5}>
                    {data.map((fish) => (
                        <GridListTile cols={1} className={classes.gridListTile} key={fish.nome}>
                            <Card 
                                title={fish.nome} 
                                subTitle={fish.familia} 
                                urlImage={fish.imageUrl}
                                description={fish.alimentacao}
                                callback={() => {}} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <Fab name="add" label="add" color="secondary" icon={icon} />
        </div>
    );
}