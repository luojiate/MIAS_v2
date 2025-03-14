# MIAS - 現代化整合應用系統

這是一個使用 Turborepo 和 pnpm Workspaces 構建的整合應用系統，包含前端和後端兩個主要部分。

## 目錄結構

```
mias/
├── apps/
│   ├── frontend/        # React + Vite 前端應用
│   └── backend/         # Next.js 後端應用
├── turbo.json           # Turborepo 配置
└── package.json         # 根目錄配置
```

## 技術棧

- **前端**: React 19, Vite, TypeScript
- **後端**: Next.js 15, TypeScript
- **工具**: pnpm, Turborepo, ESLint, Prettier, Husky, Commitlint

## 開始使用

### 前提條件

- Node.js 18+
- pnpm 8+

### 安裝依賴

```bash
pnpm install
```

### 開發模式

啟動全部應用：

```bash
pnpm dev
```

僅啟動前端：

```bash
pnpm dev:frontend
```

僅啟動後端：

```bash
pnpm dev:backend
```

### 構建應用

構建全部應用：

```bash
pnpm build
```

僅構建前端：

```bash
pnpm build:frontend
```

僅構建後端：

```bash
pnpm build:backend
```

### 代碼檢查和格式化

檢查所有代碼：

```bash
pnpm lint
```

格式化所有代碼：

```bash
pnpm format
```

## 環境配置

項目使用 `.env` 文件管理環境配置。各子應用目錄中的 `.env.example` 提供了配置示例。

## 貢獻指南

請參閱 [CONTRIBUTING.md](./CONTRIBUTING.md) 文件。

## 版本記錄

請參閱 [CHANGELOG.md](./CHANGELOG.md) 文件。

## 授權協議

MIT
