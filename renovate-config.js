/**
 * @see https://docs.renovatebot.com/self-hosted-configuration/
 */
module.exports = {
    // renovateがprを作成するブランチのプレフィックス
    branchPrefix: 'test-renovate/',
    // renovateがprを作成するユーザー名
    username: 'renovate-release',
    // renovateが作成するcommitのauthor
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    // リポジトリの初期設置時に、renovateによりonboradingのprが作成するかどうか
    onboarding: false,
    // 使用するプラットフォームを指定
    platform: 'github',
    // 対象リポジトリを設定
    repositories: [
        'kokiwaku/test-renovate'
    ],
    // パッケージ毎の更新ルールを指定
    packageRules: [
        {
            description: 'Dockerfile',
            matchFileNames: ['docker/**/Dockerfile'],
            // TODO 他のルール設定...
        },
        {
            description: 'composer.json',
            matchFileNames: ['src/composer.json'],
            // TODO 他のルール設定...
        },
        {
            description: 'package.json',
            matchFileNames: ['src/package.json'],
            // TODO 他のルール設定...
        },
    ]
};