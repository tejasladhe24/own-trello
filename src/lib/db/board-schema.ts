import {
  pgTable,
  text,
  timestamp,
  integer,
  index,
  pgEnum,
  primaryKey,
  foreignKey,
} from "drizzle-orm/pg-core"
import { $user } from "./auth-schema"

export const $visibilityType = pgEnum("visibility", ["public", "private"])
export const $boardMemberRole = pgEnum("board_member_role", ["admin", "member"])

export const $board = pgTable("board", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  visibility: $visibilityType("visibility").notNull().default("public"),
  ownerId: text("owner_id")
    .notNull()
    .references(() => $user.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
})

export const $boardMember = pgTable(
  "board_member",
  {
    userId: text("user_id")
      .notNull()
      .references(() => $user.id, { onDelete: "cascade" }),
    boardId: text("board_id")
      .notNull()
      .references(() => $board.id, { onDelete: "cascade" }),
    role: $boardMemberRole("role").default("member"),
  },
  (table) => [primaryKey({ columns: [table.userId, table.boardId] })]
)

export const $list = pgTable(
  "list",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    position: integer("position"),
    boardId: text("boardId")
      .notNull()
      .references(() => $board.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("list_board_id_idx").on(table.boardId)]
)

export const $card = pgTable(
  "card",
  {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    position: integer("position"),
    ownerId: text("ownerId")
      .notNull()
      .references(() => $user.id, { onDelete: "cascade" }),
    listId: text("listId")
      .notNull()
      .references(() => $list.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [
    index("card_owner_id_list_id_idx").on(table.ownerId, table.listId),
  ]
)

export const $comment = pgTable(
  "comment",
  {
    id: text("id").primaryKey(),
    parentId: text("parent_id"),
    commenterUserId: text("commenter_user_id")
      .notNull()
      .references(() => $user.id),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [
    index("commenter_user_id_idx").on(table.commenterUserId),
    foreignKey({
      columns: [table.parentId],
      foreignColumns: [table.id],
      name: "custom_fk",
    }),
  ]
)

export const schema = {
  // enums
  visibilityType: $visibilityType,
  boardMemberRole: $boardMemberRole,

  // tables
  boardMember: $boardMember,
  list: $list,
  card: $card,
  comment: $comment,
}
