export const searchByTitle = (title: string) => ({
	queryKey: ['searchByTitle'],
	queryFn: async ({signal}: { signal: AbortSignal }) => {
		if (!title) {
			return [];
		}
		const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=ru-RU&page=1`;
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDFmMjA3NzQwMTRlZDhjOWU2YmJiNWJlNjE2ZmZhNCIsInN1YiI6IjY2MmY5MjdmMDNiZjg0MDEyYWViNTYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eERH3BVTJkaJsNWjhij6zvUUA07Qq6kYgfV-BWStyVY'
			},
			signal
		};

		return (await (await fetch(url, options)).json()).results;
	},
	enabled: true,
	retryDelay: 1000,
	retryCount: 5,
});
