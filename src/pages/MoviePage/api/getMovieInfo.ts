const api_fetch = async ({signal}: { signal: AbortSignal }) => {
	const url = 'https://api.themoviedb.org/3/movie/now_playing?language=ru-RU&page=1';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDFmMjA3NzQwMTRlZDhjOWU2YmJiNWJlNjE2ZmZhNCIsInN1YiI6IjY2MmY5MjdmMDNiZjg0MDEyYWViNTYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eERH3BVTJkaJsNWjhij6zvUUA07Qq6kYgfV-BWStyVY'
		},
		signal
	};

	return (await (await fetch(url, options)).json()).results;
}

export const getNowPlayingMovies = {
	queryKey: ['getNowPlayingMovies'],
	queryFn: api_fetch,
	enabled: true,
	retryDelay: 1000,
	retryCount: 5,
};
