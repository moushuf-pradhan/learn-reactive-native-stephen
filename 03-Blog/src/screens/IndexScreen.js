import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Button,
	TouchableOpacity,
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
// Import icons
import { Feather } from '@expo/vector-icons';

export default function IndexScreen(props) {
	const { state, deleteBlogPost, fetchBlogPosts } =
		React.useContext(BlogContext);

	// On component mount
	React.useEffect(() => {
		fetchBlogPosts();
		const listener = props.navigation.addListener('didFocus', () => {
			fetchBlogPosts();
		});

		return () => {
			listener.remove();
		};
	}, []);
	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={post => post.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								props.navigation.navigate('Show', {
									id: item.id,
								})
							}
						>
							<View style={styles.row}>
								<Text style={styles.title}>
									{item.title} - {item.id}
								</Text>
								<TouchableOpacity
									onPress={() => deleteBlogPost(item.id)}
								>
									<Feather style={styles.icon} name="trash" />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
}

IndexScreen.navigationOptions = props => {
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() => props.navigation.navigate('Create')}
			>
				<Feather name="plus" size={30} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderTopWidth: 1,
		borderColor: 'gray',
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 20,
	},
});
