import React, { useState, useEffect } from "react"
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import styles from "./style"
import api from "../../services/api";

export default function AlterarProduto({navigation, route}){

    const idProduto = route.params.id;
    const [nome , setNome] = useState(route.params.nome)
    const [qtde , setQtde] = useState(route.params.qtde)
    
    function alterarProduto(param_id, param_nome, param_qtde){

        const produto = {
            id: param_id,
            nome: param_nome,
            quantidade: param_qtde
        }

        try {
            
            const response = api.put("/produtos/" + param_id, produto)

        } catch (error) {
            console.error("Eita! Erro ao alterar: " + error.message)
        }
        navigation.navigate("ListarProduto");
    }

    return(
        <View style={styles.container}> 
            <Text style={styles.label}>Produto</Text>
            <TextInput  
                style={styles.input}
                type="text"
                placeholder="Nome do Produto"
                onChangeText={setNome}
                value={nome}
            />

            <Text style={styles.label}>Quantidade</Text>
            <TextInput  
                style={styles.input}
                type="text"
                keyboardType="numeric"
                onChangeText={setQtde}
                value={qtde.toString()}
            />

            <TouchableOpacity 
                style={styles.buttonNewTask}
                onPress={() =>{
                    alterarProduto(idProduto, nome, qtde)
            }}>
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )

}