
このリポジトリは tris(@tris_pef) が競技プログラミングサイト [AtCoder](https://atcoder.jp/) の問題を TypeScript で解いたコードを格納するものです。実力が低いので、全部の問題を解いているわけではありません。

Windows 10 + Node.js の環境で、解答用スクリプトの生成とテストケース取得を行って準備を整え、コードを実行できるようになっています。

# コンテストの準備（スクリプトによる初期化）

スクリプトを使用してコンテストの準備を行うため、以下のようなコマンドを実行します。（コンテスト名は適宜変更してください）

```
npm run new abc012
```

すると AtCoder のサイトから情報を取得し、`src/` ディレクトリ内にコンテスト名のディレクトリが作成され、その中に各問題を解くためのスクリプト (`.ts` ファイル) と、`tests` ディレクトリの中に各問題のテストケースのテキストファイルが作成されます。

作成される `.ts` ファイルのテンプレートを変更したい場合は、 `src/init.ts` の `TEMPLETE` の中身を書き換えてください。

# スクリプトの実行方法

PowerShell コマンドラインで実行対象コードが存在するディレクトリへ移動します。

例えば `a.ts` を、`a1.txt` に書かれたテストケースで実行する場合、以下のコードを実行します。

```
cat tests/in/a1.txt | npx ts-node a
```

これで出力された実行結果が正しいことを確認します。

標準入力を終了させるために EOF が必要ですが、Windows 環境ではコマンドラインから EOF を入力できないため、ファイルから入力値（テストケース）を読み込む動作としています。
