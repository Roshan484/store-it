import { notFound } from "next/navigation";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockData } from "../../types";
import { FileList } from "../../components/file-list";

function findFolder(
	id: string,
	folder = mockData
): typeof mockData | undefined {
	if (folder.id === id) return folder;
	for (const item of folder.children) {
		if (item.type === "folder") {
			const found = findFolder(id, item);
			if (found) return found;
		}
	}
}

function getBreadcrumbs(
	id: string,
	folder = mockData,
	path: (typeof mockData)[] = []
): (typeof mockData)[] {
	path.push(folder);
	if (folder.id === id) return path;
	for (const item of folder.children) {
		if (item.type === "folder") {
			const found = getBreadcrumbs(id, item, [...path]);
			if (found) return found;
		}
	}
	return [];
}

export default function FolderPage({ params }: { params: { id: string } }) {
	const folder = findFolder(params.id);
	if (!folder) notFound();

	const breadcrumbs = getBreadcrumbs(params.id);

	return (
		<div className="flex flex-col h-screen bg-gray-900 text-gray-100">
			<header className="flex items-center justify-between p-4 border-b border-gray-700">
				<h1 className="text-2xl font-bold">Google Drive Clone</h1>
				<div className="flex items-center space-x-4">
					<Input
						type="search"
						placeholder="Search in Drive"
						className="w-64 bg-gray-800 text-gray-100"
					/>
					<Button variant="outline" className="text-[#444]">
						<Plus className="w-4 h-4 mr-2" />
						Upload
					</Button>
				</div>
			</header>
			<nav className="p-4 border-b border-gray-700">
				<Breadcrumbs items={breadcrumbs} />
			</nav>
			<main className="flex-1 overflow-hidden">
				<ScrollArea className="h-full">
					<div className="p-4">
						<FileList items={folder.children} />
					</div>
				</ScrollArea>
			</main>
		</div>
	);
}

function Breadcrumbs({ items }: { items: (typeof mockData)[] }) {
	return (
		<div className="flex items-center space-x-2 text-sm">
			{items.map((item, index) => (
				<div key={item.id} className="flex items-center">
					{index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-500" />}
					<Link href={`/folder/${item.id}`} className="hover:underline">
						{item.name}
					</Link>
				</div>
			))}
		</div>
	);
}
