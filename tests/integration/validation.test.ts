import { SELF } from "cloudflare:test";
import { describe, expect, it } from "vitest";

describe("Input Validation Tests", () => {
	describe("POST /tasks - Empty String Validation", () => {
		it("should reject empty name when creating a task", async () => {
			const invalidTaskData = {
				name: "",
				slug: "test-slug",
				description: "Test description",
				completed: false,
				due_date: "2025-01-01T00:00:00.000Z",
			};

			const response = await SELF.fetch(`http://local.test/tasks`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(invalidTaskData),
			});

			expect(response.status).toBe(400);
			const body = await response.json();
			expect(body.success).toBe(false);
		});

		it("should reject empty slug when creating a task", async () => {
			const invalidTaskData = {
				name: "Test name",
				slug: "",
				description: "Test description",
				completed: false,
				due_date: "2025-01-01T00:00:00.000Z",
			};

			const response = await SELF.fetch(`http://local.test/tasks`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(invalidTaskData),
			});

			expect(response.status).toBe(400);
			const body = await response.json();
			expect(body.success).toBe(false);
		});

		it("should reject empty description when creating a task", async () => {
			const invalidTaskData = {
				name: "Test name",
				slug: "test-slug",
				description: "",
				completed: false,
				due_date: "2025-01-01T00:00:00.000Z",
			};

			const response = await SELF.fetch(`http://local.test/tasks`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(invalidTaskData),
			});

			expect(response.status).toBe(400);
			const body = await response.json();
			expect(body.success).toBe(false);
		});
	});
});
