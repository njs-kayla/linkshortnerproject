import { pgTable, text, integer, timestamp, index, uniqueIndex } from 'drizzle-orm/pg-core';

/**
 * 短連結資料表
 * 儲存使用者建立的短連結及其相關資訊
 */
export const links = pgTable(
  'links',
  {
    // 主鍵 (使用 IDENTITY)
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    
    // Clerk 使用者 ID
    userId: text('user_id').notNull(),
    
    // 短連結代碼（唯一）
    shortCode: text('short_code').notNull(),
    
    // 原始長網址
    originalUrl: text('original_url').notNull(),
    
    // 點擊次數
    clicks: integer('clicks').notNull().default(0),
    
    // 建立時間
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => {
    return {
      // shortCode 的唯一索引，用於快速查詢和防止重複
      shortCodeIdx: uniqueIndex('short_code_idx').on(table.shortCode),
      
      // userId 的索引，用於查詢使用者的所有連結
      userIdIdx: index('user_id_idx').on(table.userId),
    };
  }
);

// 匯出型別，供應用程式使用
export type Link = typeof links.$inferSelect;
export type NewLink = typeof links.$inferInsert;
