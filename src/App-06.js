import React from "react"
import axios from "axios"
import Movie from "./Movie"
import "./App.css"
class App extends React.Component {
	/* state 객체 : 컴포넌트에 동적인 속성전달 */
	state = {
		isLoading: true,
		movies: [],
	}
	getMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
		this.setState({ movies, isLoading: false })
	}

	componentDidMount() {
		this.getMovies()
	}

	render() {
		const { isLoading, movies } = this.state
		return (
			<div>
				<section class="container">
					{isLoading ? (
						<div class="loader">
							<span class="loader__text">"로딩중..."</span>
						</div>
					) : (
						<div class="movies">
							{movies.map((movie) => (
								<Movie
									key={movie.id}
									id={movie.id}
									year={movie.year}
									title={movie.title}
									summary={movie.summary}
									poster={movie.medium_cover_image}
								/>
							))}
						</div>
					)}
				</section>
			</div>
		)
	}
}

export default App
/* app 컴포넌트는 movie의 부모 컴포넌트 이며 movie 의 데이터를 전달받아
	자식 무비 컴포넌트의 state로 전달하고 있다
*/