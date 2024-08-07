from git_filter_repo import FilterRepo, Path

def delete_files_callback(repo: FilterRepo):

    def delete_file(path: Path) -> Path:
        # List the files or directories to delete here
        paths_to_delete = ['old_directory/old_file.txt', 'obsolete_folder/']
        for target_path in paths_to_delete:
            if path.startswith(target_path):
                return None  # Return None to delete this file/directory
        return path  # Otherwise, keep the file

    repo.file_transformer.add_simple_file_rewriter(delete_file)

if __name__ == '__main__':
    repo = FilterRepo(repo_dir='.')
    delete_files_callback(repo)
    repo.run()
    
    
