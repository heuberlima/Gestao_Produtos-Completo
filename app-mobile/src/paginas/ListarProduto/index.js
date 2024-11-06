import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, RefreshControl, SafeAreaView } from "react-native";
import api from "../../services/api";
import style from "./style";
import { FontAwesome } from "@expo/vector-icons";

export default function ListarProduto({ navigation }) {
    const [produtos, setProdutos] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            atualizarLista();
        });

        return unsubscribe;
    }, [navigation]);

    const atualizarLista = useCallback(() => {
        api.get("/produtos")
            .then((response) => setProdutos(response.data))
            .catch((error) => {
                console.log("Erro: ", error.message);
            })
            .finally(() => setRefreshing(false));
    }, []);

    const excluirProduto = async (id) => {
        try {
            await api.delete(`/produtos/${id}`);
            atualizarLista();  // Atualiza a lista após excluir o produto
        } catch (error) {
            console.log("Erro ao excluir: " + error.message);
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        atualizarLista();
    }, [atualizarLista]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.container}>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    data={produtos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={style.Produtos}>
                            <Text
                                onPress={() => navigation.navigate("AlterarProduto", { id: item.id, nome: item.nome, qtde: item.quantidade })}
                                style={style.DescriptionProduto}
                            >
                                {item.nome}
                            </Text>
                            <TouchableOpacity
                                style={style.deleteProduto}
                                onPress={() => excluirProduto(item.id)}
                            >
                                <FontAwesome
                                    name="trash"
                                    size={20}
                                    color="#007bff"
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <TouchableOpacity
                    style={style.buttonNewProduto}
                    onPress={() => navigation.navigate("IncluirProduto")}
                >
                    <Text style={style.iconButton}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
