# 貢獻指南

感謝您對本項目的關注！以下是參與貢獻的指南。

## 開發流程

1. Fork 本倉庫
2. 克隆您的 Fork 到本地機器
3. 建立您的功能分支 (`git checkout -b feature/amazing-feature`)
4. 提交您的修改 (`git commit -m 'feat: add some amazing feature'`)
5. 推送到您的分支 (`git push origin feature/amazing-feature`)
6. 創建 Pull Request

## 提交信息規範

本項目使用 [Conventional Commits](https://www.conventionalcommits.org/) 規範，提交信息應遵循以下格式：

```
<類型>[可選的作用域]: <描述>

[可選的正文]

[可選的頁腳]
```

### 類型

主要的提交類型：

- `feat`: 新功能
- `fix`: 錯誤修復
- `docs`: 文檔變更
- `style`: 代碼格式變更（不影響代碼運行的變動）
- `refactor`: 代碼重構（既不修復錯誤也不添加功能）
- `perf`: 性能優化
- `test`: 添加缺失的測試或更正現有的測試
- `build`: 影響構建系統或外部依賴項的更改
- `ci`: 對 CI 配置文件和腳本的更改
- `chore`: 其他不修改 src 或 test 文件的更改

## 分支策略

- `main`: 穩定分支，只接受合並請求
- `develop`: 開發分支，新功能應基於此分支開發
- `feature/*`: 功能分支，用於開發新功能
- `bugfix/*`: 錯誤修復分支
- `release/*`: 發布準備分支

## 代碼風格

- 遵循項目中配置的 ESLint 和 Prettier 規則
- 寫清晰的註釋
- 保持函數和組件的單一職責
- 使用有意義的變數和函數名稱

## Pull Request 流程

1. 確保您的代碼通過了所有的測試和構建
2. 更新相關文檔
3. 請求至少一位團隊成員的代碼審核
4. 解決代碼審核中提出的問題
5. 等待合併審批

## 發布流程

我們使用 [Changesets](https://github.com/changesets/changesets) 來管理版本和更新日誌。

1. 添加 changeset: `pnpm changeset`
2. 選擇要發布的包
3. 選擇版本類型
4. 描述變更
