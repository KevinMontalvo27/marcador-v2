<script>
	import { Trophy, Volleyball, FolderKanban, User } from 'lucide-svelte';
</script>

<aside class="prose">
	<section>
		<h2 class="text-center	">Menu</h2>
		<ul>
			<li>
				<a href="dashboard" class="transition-colors hover:text-blue-500">
					<Volleyball/>
					Partidos
				</a>
				<a href="dashboard" class="transition-colors hover:text-blue-500">
					<Trophy />
					Torneos
				</a>
				<a href="dashboard/equipos" class="transition-colors hover:text-blue-500">
					<FolderKanban/>
					Equipos
				</a>
				<a href="dashboard/jugadores" class="transition-colors hover:text-blue-500">
					<User/>
					Jugadores
				</a>
			</li>
		</ul>
	</section>
</aside>
