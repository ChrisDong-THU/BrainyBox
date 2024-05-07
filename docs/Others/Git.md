# Git

## 将本地仓库上传到远程仓库

1. 在github创建新的库：`Repositories+New`

2. 初始化：`git init`

   ?> 如与github的分支名不一致，需更改本地分支名为`main`：`git branch -m master main`

3. 文件加入暂存区：`git add .`

4. 提交更改到本地历史区：`git commit -m "comments"`

5. 远程1（拉取）：
   - 将本地历史区文件提交到github服务器暂存区：`git remote add origin <httpsaddress>` 
   - 设置同步(可选)：`git pull origin master --allow-unrelated-histories`

6. 远程2（推送）：提交到远程仓库：`git push -u origin master`

## 分支的修改于恢复方法

1. 修改分支：

   - 本地分支：

     ```shell
     # 查看所有分支
     git branch -a
     # 强制删除-d改为-D
     git branch -d <localbranch>
     ```

   - 远程分支：

     ```shell
     git push origin -d <remotebranch>
     ```

2. 恢复分支：

   ```shell
   # 查看删除的分支
   git remote prune --dry-run origin
   # 寻找删除操作的commit SHA值
   git reflog
   # 根据值创建新分支，新分支创建在本地而非远程仓库
   git checkout -b <branchname> <SHA>
   ```

3. 其他：

   1. vscode编辑期间不小心删除的文件恢复：`ctrl+shift+p`->`本地历史记录`->`还原选择文件`
   2. git注意远程仓库和本地仓库的区别，不要随意**同步更改**！
