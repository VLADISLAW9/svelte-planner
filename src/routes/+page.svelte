<script>
	import { Heading, Button, Navbar, NavBrand } from 'flowbite-svelte';
	import { ROUTES } from '../lib';
	import { CheckCheckIcon } from 'lucide-svelte';
</script>

<div class="h-screen flex justify-between flex-col">
	<header>
		<Navbar>
			<NavBrand href="/">
				<div class="flex gap-2 items-center">
					<CheckCheckIcon size={40} />
					<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						Svelte Planner
					</span>
				</div>
			</NavBrand>
			<div class="flex items-center lg:order-2">
				<Button href={ROUTES.LOGIN} color="alternative" class="ml-2">Login</Button>
				<Button href={ROUTES.LOGIN} class="ml-2">Get started</Button>
			</div>
		</Navbar>
	</header>
	<div class="text-center h-full flex flex-col justify-center items-center">
		<Heading tag="h1" class="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">
			Todo list on Svelte JS
		</Heading>
		<Button class="w-[200px] mt-5" size="xl" href={ROUTES.LOGIN}>Get started</Button>
	</div>
</div>
